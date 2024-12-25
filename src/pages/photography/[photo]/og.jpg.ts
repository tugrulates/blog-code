import { APIRoute } from "astro";
import { formatDate } from "~/date.ts";
import { getOpenGraphImage } from "~/node.ts";
import { getEntry } from "~/site.astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const photo = await getEntry("photos", params.photo ?? "");
  if (!photo) return new Response("Not found", { status: 404 });
  return await getOpenGraphImage(
    {
      image: photo.data.wide,
      title: photo.data.title,
      description: `${formatDate(photo.data.date)} — ${photo.data.location}`,
      cta: "View photo",
    },
  );
};
