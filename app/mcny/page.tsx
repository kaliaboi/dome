import Footer from "@/components/footer";
import Mcny from "@/components/mcny";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark min-h-full">
      <Nav />
      <div className="md:mx-[160px]">
        <Mcny />
      </div>
      <div className="md:mx-[160px]">
        <p className="my-[16px] mx-[25px] md:mx-0 leading-7">
          This Is New York: 100 Years of the City in Art and Pop Culture is an
          exhibition marking the 100 year anniversary of the Museum of the City
          of New York. Dome conceived, designed, and produced three media
          installations integrated into this fun-filled show: a motion title
          wall that animates famous quotes around the words "New York" using
          projection mapping; an interactive bookshelf that unlocks depictions
          of homes from iconic stories like Eloise and The Jeffersons; and the
          music interactive, Songs of New York which invites visitors to step on
          each of the five boroughs to play songs across the century from
          artists like Duke Ellington, Blondie, and Wu-Tang Clan.
        </p>

        <div className="my-[16px] mx-[25px] md:mx-0 leading-7">
          <p className="font-bold mt-[32px]">Services</p>
          <p>
            Lead experience strategy, creative direction, design, and media
            production by Dome.
          </p>

          <p className="font-bold mt-[32px]">Collaborators</p>
          <p>
            Exhibition design by Studio Joseph. Creative technology by The
            Cuttlefish
          </p>

          <p className="font-bold mt-[32px]">Awards</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            urna purus, feugiat et pulvinar id, tincidunt id mi. Suspendisse
            vitae arcu vitae dui ornare
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
