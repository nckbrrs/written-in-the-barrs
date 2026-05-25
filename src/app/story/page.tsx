import ContentHeader from "~/components/ContentHeader";
import Image from "next/image";
import { cn } from "~/lib/utils";

export default function Story() {
  return (
    <div className={cn(
      "flex flex-col grow justify-start items-center",
      "pt-8 px-6 md:px-24 lg:px-16 xl:px-36",
      "max-w-[1600px]"
    )}>
      <ContentHeader text="OUR STORY" />
      <div className={cn(
        "flex flex-row w-full",
        "max-h-96 aspect-video overflow-hidden",
        "relative mb-10"
      )}>
        <Image
          className={cn(
            "w-full h-full",
            "object-cover object-[0%_30%]",
            "drop-shadow-sm rounded-3xl"
          )}
          src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAqRkQs857ZHRixrd0Ua3yoI8ukN6qKWMge2tA"
          alt="black & white photo of nick and brooke at a coffee shop"
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1600px) calc(100vw - 8rem), 1400px"
          quality={85}
          priority
        />
      </div>
      <div className={cn(
        "flex flex-col lg:flex-row w-full",
        "gap-12 lg:gap-8 md:text-lg",
        "mb-6"
      )}>
        <div className="flex flex-col lg:w-1/2">
          <h2 className={cn(
            "font-weiss text-dark-terracotta font-bold",
            "tracking-widest lg:tracking-[0.25rem] uppercase",
            "md:text-xl lg:text-2xl",
            "mb-2 lg:mb-4"
          )}>
            From Brooke&apos;s Perspective...
          </h2>
          <p className="font-weiss leading-5 text-black">
            June 2020, I knew I was going to marry Nick. I just woke up one day and felt with all
            the certainty in my heart that he was who I would spend the rest of my days with.
            <br />
            <br />
            It&apos;s amusing that we served in the same ministry together all those years, just out
            of reach and right where we needed to be. We both served with Clemson FCA for four
            years, went to the same church, and basically had all the same friends. It&apos;s
            incredible how an acquaintance can change your life.
            <br />
            <br />
            When I moved to Raleigh in April of 2020, I figured I&apos;d spend a few months stuck
            inside with my friends Nate and Zoë and maybe hang out with Nick as he was only one of 4
            humans I knew in the area. Little did we know that COVID was here to stay, and our group
            would spend the whole next year together three times a week playing Catan and watching
            Superstore.
            <br />
            <br />
            We were just friends; that&apos;s what I kept telling everyone and myself. But by
            September, I knew I was in love with him after a weekend trip to visit my family and my
            hometown. He sent us the demo of the song he&apos;d been working on for months (have you
            heard it? it&apos;s incredible) as soon as we got back to Raleigh, and I knew I was
            really in trouble. So now I was just left praying our flirty friendship was actually as
            flirty as I thought.
            <br />
            <br />
            Fast forward to November, and my work was planning to bring everyone out to California
            for our end-of-the-year Christmas party. I offered a fun long weekend in LA to our
            group, and Nick was the only one to take me up on it. So, of course, Zoë and I spent the
            majority of the month leading up to the trip wondering if this was even real and what, if
            anything, it could mean.
            <br />
            <br />
            But it was real, and it took everything in me to contain my excitement. After a few days
            in Orange County working with my team, Nick flew out to join me. We stayed in a pretty
            sketch Airbnb, visited some friends in San Diego, introduced him to a few of my friends,
            explored as much of LA as we could, and ate a lot of In-N-Out and Sidecar donuts. We hit
            our groove that Monday celebrating his 25th birthday and decided that we wanted to do
            that day pretty much all over again on our final day in SoCal.
            <br />
            <br />
            We ended our last day watching the sunset with Sidecar donuts on the beach at Santa
            Monica, then picked up In-N-Out to eat up at Griffith Observatory. We chatted and ate
            dinner on a little trail in front of Griffith, and something just felt right. And I
            worked up every ounce of courage I had to ask him if anything was going on between us.
            Thank God he said yes. My little heart soared. And as we walked back up to our rental
            car, he told me he really wanted to kiss me, and that is the story of the most romantic
            first kiss in human history with the LA skyline as the backdrop.
            <br />
            <br />
            Pretty much every day since then has been magic. Before we even made it official, I told
            him I loved him on the couch he would one day propose to me beside. He told me he loved
            me a few months later in his car outside a bar in his hometown.
            <br />
            <br />
            In the last year and some change, we&apos;ve learned a lot about loving each other well,
            the beauty of the mundanity of life when you get to spend it with your best friend, and
            how sweet life really can be. We learned how to navigate a pandemic and massive political
            and social upheaval together (did I mention we started dating the day of the capital
            insurrection? lol), and we&apos;ve learned how to come back to church after a year of
            couch church. There is truly no one I would have rather had by my side through the good
            and bad of the last two years. And man, there&apos;s no one I&apos;d rather have by my
            side through whatever life throws at us in decades to come.
            <br />
            <br />
            On February 12, my best friend and my family were in town so I could go dress
            shopping—yes, we were planning this wedding before he put a ring on it, chill—and he
            asked us to stop by his place before we all went out to dinner. And in the living room
            where we fell in love, he asked me to marry him. The best day of my life. That is, until
            June 24.
          </p>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h2 className={cn(
            "font-weiss text-dark-terracotta font-bold",
            "tracking-widest lg:tracking-[0.25rem] uppercase",
            "md:text-xl lg:text-2xl",
            "mb-2 lg:mb-4"
          )}>
            From Nick&apos;s Perspective...
          </h2>
          <p className="font-weiss leading-5 text-black">
            It&apos;s safe to say that 2020 was full of surprises.
            <br />
            <br />
            Work went remote, church went virtual, and spending time in public became all but
            impossible. The name of the game was basically to find a few friends and hang out with
            them inside for the rest of eternity. Luckily, a close friend of mine and her husband
            (Nate and Zoë) had recently moved to Raleigh. And even more luckily (luckier than I
            could have ever imagined), Brooke decided to move to Raleigh, too! Even though we
            weren&apos;t really friends at all, Brooke and I were both close to Nate and Zoe in our
            own ways, so naturally, the four of us became inseparable — ordering takeout, watching
            movies and tv shows, playing board games, traveling here and there, etc pretty much every
            single day of our lives. If you happened to follow either of us on Instagram at the time,
            you were aware.
            <br />
            <br />
            As you&apos;d expect with the whole
            single-guy-and-single-girl-hanging-out-with-married-couple situation, the &quot;iS
            aNyThInG gOiNg On BeTwEeN yOu AnD bRoOkE??&quot;s started to pour in from friends and
            family. Our external responses would always be &quot;no&quot;, but little did we both
            know how much our internal feelings had been stirring.
            <br />
            <br />
            Well, little did *I* know. Per Brooke&apos;s story, she clearly knew much earlier than I
            did. Oops!
            <br />
            <br />
            In the Spring, I was pretty fresh out of a long-term relationship (like,
            on-and-off-for-eight-years long), and I was still pretty new to my city, new to my job,
            new to my church, new to my friend group (minus Nate + Zoe)… you get the picture.
            I&apos;d moved a few hundred miles away from pretty much all of my friends and family and
            was building a new life here on my own.
            <br />
            <br />
            All that to say — I wasn&apos;t really in a place to jump into a new relationship. I
            wasn&apos;t even looking. So even as Brooke and I became closer, and the questions
            started pouring in, and the &quot;wow she&apos;s really cool&quot; thoughts started
            coming on, I kind of didn&apos;t allow my brain to &quot;go there&quot; for a while. It
            would have been the easiest thing in the world to just say &quot;welp, here&apos;s this
            pretty girl who went to college with me and is friends with my friends and is quaranting
            with me and another married couple, etc, etc, etc, we may as well date!&quot; The
            convenience factor was so strong. But I didn&apos;t want to date someone out of
            convenience, I didn&apos;t want to start a new relationship just because it was the easy
            thing to do, and I didn&apos;t want to ruffle our friendship and our friend group. And
            important to keep in mind — I didn&apos;t know if she liked me!
            <br />
            <br />
            So, that&apos;s where I was at for a few months. And then when I went to California with
            her, it was just amplified. Pretty much every five minutes I found myself thinking
            &quot;wow this is really nice?&quot;, and &quot;should I hold her hand?&quot;, and
            &quot;uhh is this romantic or am I just way too in my head?&quot; At one point I
            resolved to, again, shut myself off from those thoughts and think about it more when we
            got home. I didn&apos;t want her to think I was a creep and I didn&apos;t want to ruin
            the trip. Luckily, Brooke was (is) way braver than me. On our last night in California,
            we were sitting on a bench outside Griffith Observatory, eating In-N-Out burgers, looking
            out over the Los Angeles skyline, when she now famously asked me &quot;is anything going
            on here?&quot;.
            <br />
            <br />
            We proceeded to confess to each other that yes, indeed there was something going on here,
            we kissed, we flew home, and the rest is history.
            <br />
            <br />
            There have been days in my life where I didn&apos;t think I would ever be ready to be
            married. I&apos;ve been scared and doubtful and anxious about sharing my life with
            someone forever and ever.
            <br />
            <br />
            But I&apos;m not that way anymore. Over the past year I&apos;ve come to love Brooke and
            be loved by her in ways that I didn&apos;t know were possible. She is the light of my
            life. She&apos;s my dream girl. I know without a doubt that marrying her will be the
            greatest honor and joy of my life.
            <br />
            <br />
            y&apos;all mind if we get married?
          </p>
        </div>
      </div>
      <div className={cn(
        "flex flex-row w-full",
        "max-h-96 aspect-video overflow-hidden",
        "relative mb-10"
      )}>
        <Image
          className={cn(
            "w-full h-full",
            "object-cover object-[0%_30%]",
            "drop-shadow-sm rounded-3xl"
          )}
          src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAXjqOKjF9JXp5nFkG2TyrbUtxPjlC0mB1au4K"
          alt="black & white photo of nick and brooke at a coffee shop"
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1600px) calc(100vw - 8rem), 1400px"
          quality={85}
        />
      </div>
    </div>
  );
}
