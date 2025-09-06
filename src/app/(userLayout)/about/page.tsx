import { Leaf, ShoppingCart, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
const about = () => {
  return (
    <div className="mt-32">
      <section className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <Leaf className="h-10 w-10 text-green-600 mb-2" />
            <CardTitle className="text-xl">Sustainable Plants</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Our plants are grown using eco-friendly practices, helping you stay
            green while going green.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <ShoppingCart className="h-10 w-10 text-green-600 mb-2" />
            <CardTitle className="text-xl">Simple Ordering</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Choose your favorite plants, and we will handle the rest—from
            potting to packaging.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center">
            <Truck className="h-10 w-10 text-green-600 mb-2" />
            <CardTitle className="text-xl">Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            We ensure safe, fast delivery so your new leafy friend arrives happy
            and healthy.
          </CardContent>
        </Card>
      </section>
      <section className="mt-24">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Core Values
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          These core principles guide every decision we make—from choosing our
          growers to how we treat our customers.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Leaf className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle className="text-xl">Sustainability</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              We prioritize eco-conscious sourcing and packaging to reduce our
              environmental impact.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <ShoppingCart className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle className="text-xl">Transparency</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              From plant care to shipping, we’re open about our process—no
              greenwashing here.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col items-center">
              <Truck className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle className="text-xl">Customer First</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Every plant and customer is treated with care, ensuring a
              delightful experience from start to finish.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              Our mission is to connect people with plants in a way that is
              simple, sustainable, and joyful. Whether you are a seasoned plant
              parent or just getting started, we are here to help every step of
              the way.
            </p>

            <ul className="space-y-3">
              {[
                "Eco-friendly practices from root to leaf",
                "Curated plant selections for every space",
                "Friendly support from real plant experts",
                "Fast, safe delivery across the country",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <Image
              src="/monstera-deliciosa.png"
              alt="Our mission image"
              width={500}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
