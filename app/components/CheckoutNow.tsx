"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  slug,
}: ProductCart) {

  function handleWhatsAppMessage() {
    const product = {
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      price_id: price_id,
      slug: slug,
    };
    const message = `Hello! I'd like to learn more about the following product:\n\n*Product Name*: ${product.name}\n*Price*: ${product.price} ${product.currency}\n\n*Product URL*: https://ugreader-5b2m.onrender.com/product/${product.slug}`;
    const phoneNumber = "+256764725740";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }

  return (
    <Button
      variant="outline"
      onClick={handleWhatsAppMessage}
    >
      Learn more
    </Button>
  );
}
