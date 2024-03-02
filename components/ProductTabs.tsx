"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

export default function ProductTabs() {
  return (
    <div className="flex justify-center mt-10">
      <Tabs defaultValue="monthly" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <Card className="text-center">
            <CardHeader>
              Monthly Plan
              <CardDescription>Pay month to month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-bold">
                <span className="text-xl">$10</span>
                <span className="px-2">per month</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={"/purchase"}>
                <Button>
                  <ShoppingCart className="me-2" />
                  Buy Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="yearly">
          <Card className="text-center">
            <CardHeader>
              Yearly Plan
              <CardDescription>Pay one year up front</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="font-bold">
                <span className="text-xl">$100</span>
                <span className="px-2">per year</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={"/purchase"}>
                <Button>
                  <ShoppingCart className="me-2" />
                  Buy Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
