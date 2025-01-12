import { AUTHOR, SITE } from "~/config.ts";
import { getPhotos } from "~/content.ts";
import { getOpenGraphImage } from "~/image.ts";

export async function GET() {
  const photos = await getPhotos();
  return await getOpenGraphImage(
    {
      site: SITE.url,
      image: photos[0].data.wide,
      title: "Photography",
      subtitle: `by ${AUTHOR.name}`,
      description: `Enjoy my photography from around the world.
                    You are free to use these for any purpose.
                    When sharing, credit me as the photographer.`,
      cta: "Visit",
    },
  );
}
