import Image from "next/image";
import styles from "./page.module.css";
import MainBanner from "@/src/components/server-components/banners/MainBanner";
import TagTab from "@/src/components/client-components/tab/TagTab";
import LayoutSideBar from "@/src/components/client-components/sideBar/LayoutSideBar";

export default function Home() {
  return (
    <main>
      <div className={styles.page_banner_wrapper}>
        <MainBanner />
      </div>
      <div className={styles.layout_wrapper}>
        <div className={styles.content_side}>
          <div className={styles.sticky_tab_wrapper}>
            <TagTab />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis ultricies massa at finibus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Morbi a pulvinar risus. Maecenas et sem
            dolor. Donec at molestie sem. Sed placerat eget ante vitae sagittis.
            Vivamus rhoncus finibus arcu, eu vestibulum quam mollis sed.
            Suspendisse quis odio ultricies, tincidunt nisl eu, gravida magna.
            Suspendisse justo mi, eleifend ac ante sit amet, faucibus
            scelerisque massa. Mauris faucibus lacus quis sapien egestas, non
            ullamcorper turpis facilisis. Nullam eleifend mi vitae tellus
            suscipit cursus. Pellentesque commodo molestie nibh interdum
            facilisis. Phasellus sed ultricies ligula. Sed mollis purus libero,
            ut accumsan ipsum placerat a. Suspendisse malesuada eu orci nec
            porta. Cras sollicitudin sollicitudin commodo. Fusce ac ante
            molestie, facilisis tellus sit amet, vehicula ex. Phasellus at
            luctus leo. Sed sed ipsum quis ligula vehicula tincidunt molestie a
            nunc. Integer fermentum efficitur dapibus. Donec dictum, purus eu
            egestas posuere, tellus eros pretium enim, ut ultricies turpis magna
            aliquet eros. Nulla eget augue odio. Aliquam eleifend nulla eget
            diam tincidunt, eu luctus nibh consequat. Fusce non ex vitae libero
            ornare iaculis at et lectus. Integer sed neque sed tortor lacinia
            malesuada. Nulla convallis arcu finibus, condimentum velit ut,
            aliquam diam. Vestibulum vehicula ut ante eu porta. Vestibulum velit
            metus, hendrerit id posuere sit amet, lacinia quis ante. Aliquam
            laoreet commodo purus. Aliquam ex est, imperdiet sit amet eleifend
            eget, laoreet et ante. Nam vitae tortor neque. Nunc consectetur
            metus ut eros interdum aliquet. Integer venenatis nec tellus non
            commodo. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Nam eleifend gravida sollicitudin.
            Morbi auctor pulvinar ligula, id aliquam diam dapibus id. Sed
            ullamcorper volutpat ornare. Mauris ac nisi id est maximus iaculis
            ut nec nunc. In at nisl sit amet magna scelerisque pulvinar sagittis
            quis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. In odio sapien, sollicitudin quis nisi vel, tincidunt iaculis
            dui. Integer accumsan tortor dapibus, iaculis felis sit amet, semper
            neque. Praesent non viverra lacus. Maecenas in justo quis purus
            semper facilisis eu vitae arcu. Maecenas bibendum, quam non varius
            maximus, quam leo tempor orci, vitae tincidunt eros metus a urna.
            Donec dapibus nunc eu nunc eleifend mollis. Sed nibh leo, consequat
            vehicula velit ac, fermentum mollis odio. Donec nec pharetra lectus.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed fermentum turpis purus. Sed congue
            pellentesque purus ut vehicula. Sed fringilla placerat elit
            porttitor fermentum. Phasellus a mauris risus. Integer lobortis
            mauris et mauris auctor, ac blandit velit ultricies. Ut dictum
            lectus quis arcu fringilla, eget convallis sapien convallis. Quisque
            consectetur risus blandit enim semper, a efficitur urna accumsan.
            Morbi nec elit a quam euismod sodales. Ut varius elit lorem, nec
            viverra dolor sollicitudin eget. Donec ullamcorper lobortis leo, nec
            sodales erat facilisis at. Sed efficitur purus enim, non dignissim
            turpis vulputate id.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis ultricies massa at finibus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Morbi a pulvinar risus. Maecenas et sem
            dolor. Donec at molestie sem. Sed placerat eget ante vitae sagittis.
            Vivamus rhoncus finibus arcu, eu vestibulum quam mollis sed.
            Suspendisse quis odio ultricies, tincidunt nisl eu, gravida magna.
            Suspendisse justo mi, eleifend ac ante sit amet, faucibus
            scelerisque massa. Mauris faucibus lacus quis sapien egestas, non
            ullamcorper turpis facilisis. Nullam eleifend mi vitae tellus
            suscipit cursus. Pellentesque commodo molestie nibh interdum
            facilisis. Phasellus sed ultricies ligula. Sed mollis purus libero,
            ut accumsan ipsum placerat a. Suspendisse malesuada eu orci nec
            porta. Cras sollicitudin sollicitudin commodo. Fusce ac ante
            molestie, facilisis tellus sit amet, vehicula ex. Phasellus at
            luctus leo. Sed sed ipsum quis ligula vehicula tincidunt molestie a
            nunc. Integer fermentum efficitur dapibus. Donec dictum, purus eu
            egestas posuere, tellus eros pretium enim, ut ultricies turpis magna
            aliquet eros. Nulla eget augue odio. Aliquam eleifend nulla eget
            diam tincidunt, eu luctus nibh consequat. Fusce non ex vitae libero
            ornare iaculis at et lectus. Integer sed neque sed tortor lacinia
            malesuada. Nulla convallis arcu finibus, condimentum velit ut,
            aliquam diam. Vestibulum vehicula ut ante eu porta. Vestibulum velit
            metus, hendrerit id posuere sit amet, lacinia quis ante. Aliquam
            laoreet commodo purus. Aliquam ex est, imperdiet sit amet eleifend
            eget, laoreet et ante. Nam vitae tortor neque. Nunc consectetur
            metus ut eros interdum aliquet. Integer venenatis nec tellus non
            commodo. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Nam eleifend gravida sollicitudin.
            Morbi auctor pulvinar ligula, id aliquam diam dapibus id. Sed
            ullamcorper volutpat ornare. Mauris ac nisi id est maximus iaculis
            ut nec nunc. In at nisl sit amet magna scelerisque pulvinar sagittis
            quis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. In odio sapien, sollicitudin quis nisi vel, tincidunt iaculis
            dui. Integer accumsan tortor dapibus, iaculis felis sit amet, semper
            neque. Praesent non viverra lacus. Maecenas in justo quis purus
            semper facilisis eu vitae arcu. Maecenas bibendum, quam non varius
            maximus, quam leo tempor orci, vitae tincidunt eros metus a urna.
            Donec dapibus nunc eu nunc eleifend mollis. Sed nibh leo, consequat
            vehicula velit ac, fermentum mollis odio. Donec nec pharetra lectus.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Sed fermentum turpis purus. Sed congue
            pellentesque purus ut vehicula. Sed fringilla placerat elit
            porttitor fermentum. Phasellus a mauris risus. Integer lobortis
            mauris et mauris auctor, ac blandit velit ultricies. Ut dictum
            lectus quis arcu fringilla, eget convallis sapien convallis. Quisque
            consectetur risus blandit enim semper, a efficitur urna accumsan.
            Morbi nec elit a quam euismod sodales. Ut varius elit lorem, nec
            viverra dolor sollicitudin eget. Donec ullamcorper lobortis leo, nec
            sodales erat facilisis at. Sed efficitur purus enim, non dignissim
            turpis vulputate id.
          </p>
        </div>
        <div className={styles.layout_side_bar}>
          <LayoutSideBar />
        </div>
      </div>
    </main>
  );
}
