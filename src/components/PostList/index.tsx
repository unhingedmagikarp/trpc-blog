/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { api } from "~/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function PostList() {
  const posts = api.post.getAllPosts.useQuery();

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <section className="m-auto w-full">
      <h1 className="mb-8 text-center text-xl">Latest Posts</h1>

      {posts?.data?.length ? (
        posts.data.map((post) => {
          return (
            <Card className="mb-8 ml-auto mr-auto max-w-xl" key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
              <CardFooter>
                <p>Published on {formatDate(post.createdAt)}</p>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <h2>No posts found</h2>
      )}
    </section>
  );
}
