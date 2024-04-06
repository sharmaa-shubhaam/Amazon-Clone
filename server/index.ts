import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Stripe from "stripe";

interface ProductList {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   };
   quantity: number;
}

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

app.post("/stripe-checkout", async (req, res) => {
   try {
      // Get Product array from the frontend.
      const items: ProductList[] = req.body;
      if (items.length === 0) throw new Error("Nothing recieving the empty Array[0] here.");

      // Creating the Array of line_items of stripe session.
      const stripe_line_items = items.map((item: ProductList) => ({
         quantity: item.quantity,
         price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
               name: item.title,
               images: [item.image],
               description: item.description,
            },
         },
      }));

      // Creating the stripe Instance with the Stripe Secert Key.
      if (!process.env.STRIPE_SECRET_KEY) throw new Error("No Stripe Key");
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      // creating the checkout session.
      const session = await stripe.checkout.sessions.create({
         mode: "payment",
         payment_method_types: ["card"],
         line_items: stripe_line_items,
         success_url: `${process.env.HOST}/checkout?message=success`,
         cancel_url: `${process.env.HOST}/checkout?message=failed`,
      });

      // send session id or You can send session Url.
      return res.status(200).send({ id: session.id });
   } catch (error) {
      console.log(error);
      return res.status(500).send(error);
   }
});

app.listen(3001, () => console.log("backend running....."));
