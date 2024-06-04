"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  slug: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  slug,
}: ProductCart) {
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    slug: slug,
  };

  const handleWhatsAppMessage = () => {
    const message = `*Product Name*: ${product.name}\n*Price*: ${product.price} ${product.currency}\n*Description*: ${product.description}\n*Product URL*: https://www.ugreader.com/product/${product.slug}`;
    const phoneNumber = "+256764725740";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button onClick={handleWhatsAppMessage}>
      Checkout Now
    </Button>
  );
}
