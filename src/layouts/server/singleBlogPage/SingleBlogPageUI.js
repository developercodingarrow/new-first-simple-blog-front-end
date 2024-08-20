import React from "react";
import styles from "./css/singleBlogPage.module.css";
import BlogActionBar from "./BlogActionBar";
import Image from "next/image";
import sampleImg from "../../../../public/web-static-img/larg-img.jpg";
import CommentComponent from "@/src/components/client-components/comments/CommentComponent";

export default function SingleBlogPageUI(props) {
  const { ssrData } = props;
  return (
    <div className={styles.main_container}>
      <section className={styles.content_main_container}>
        <div className={styles.banner_section}>banner</div>
        {/* center section start */}
        <div className={styles.contnet_section}>
          <div className={styles.top_section}>
            <div className={styles.title_meta_wrapper}>
              <div className={styles.title_wrapper}>
                <h1> {ssrData.blogTitle}</h1>
              </div>
              <div className={styles.meta_wrapper}>
                <h3>{ssrData.metaDescription}</h3>
              </div>
            </div>
            <div className={styles.actios_wrapper}>
              <BlogActionBar blog={ssrData} />
            </div>
          </div>
          <div className={styles.ssr_img_wrapper}>
            <Image src={sampleImg} className={styles.img_style} />
          </div>

          <div className={styles.ssr_content_wrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac rutrum nulla. Vivamus viverra sit amet lectus a
              aliquet. Morbi et ligula ut enim luctus consequat ut vel nibh.
              Nulla accumsan dolor id leo aliquet, nec suscipit tellus bibendum.
              Aliquam dictum lobortis efficitur. Praesent quis vulputate lectus.
              Suspendisse nec nibh in erat fringilla hendrerit ut eget diam. Nam
              eu elementum lorem. Vestibulum posuere congue enim quis tempor. In
              rutrum euismod fringilla. Vestibulum non convallis ligula. Proin
              eget neque venenatis elit viverra gravida vitae et lacus.
              Vestibulum vel mauris mauris. Vivamus convallis turpis sem, et
              sagittis lectus egestas et. Integer eu arcu congue, aliquam nisi
              ut, molestie libero. Vestibulum pretium ut felis eu eleifend.
              Vestibulum pretium porttitor enim at posuere. Integer eget gravida
              lacus. Nunc lacinia quam eu nisl accumsan sollicitudin. Sed in
              mauris leo. Quisque ullamcorper, orci vitae suscipit finibus, nisl
              leo commodo tortor, id cursus ex dui id tortor. Cras tincidunt
              tortor eu facilisis tincidunt. Aliquam ac neque orci. Nulla
              facilisi. Phasellus et nunc venenatis, ultrices nisl non,
              consequat erat. Quisque in libero vitae purus congue dignissim.
              Proin tempus, leo sit amet blandit finibus, velit justo egestas
              est, nec maximus diam arcu at ipsum. Nam ac ante augue. Sed
              interdum in augue ac posuere. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Morbi dapibus quam eros. Donec pulvinar vitae dolor eu lacinia.
              Donec non euismod lorem. Maecenas congue, orci sit amet semper
              posuere, velit urna elementum velit, eget luctus ipsum quam id
              lorem. Vestibulum tempor bibendum arcu eu tincidunt. Morbi
              vestibulum, odio vitae maximus mattis, velit purus blandit tellus,
              id viverra lacus orci vel arcu. Quisque in viverra eros.
              Vestibulum ac mi placerat, volutpat odio a, vulputate mi. Nam id
              diam imperdiet, lobortis risus et, lobortis mi. Duis blandit nunc
              ac vulputate cursus. Maecenas volutpat id dui rhoncus pulvinar.
              Aliquam imperdiet gravida dui eget gravida. Nullam fermentum
              pretium elit, quis commodo neque ullamcorper ac. Proin ut sem
              congue, congue lectus nec, facilisis neque. In tincidunt
              condimentum ultrices. Mauris eget risus at diam congue laoreet.
              Phasellus vel porttitor ligula, nec ornare urna. Nulla facilisi.
              Donec tristique lobortis tristique. Proin ut purus malesuada
              turpis sollicitudin bibendum et pellentesque odio. Phasellus
              venenatis porta metus vitae efficitur. Nulla pellentesque, dui ac
              molestie blandit, libero nibh tincidunt neque, quis pharetra ipsum
              odio id metus. Curabitur suscipit pellentesque ultrices.
              Suspendisse blandit eleifend lobortis. Donec vehicula gravida
              sapien, mollis blandit sem ultrices a. Nulla vitae vulputate nibh.
              Nam eleifend quam eu nibh sollicitudin eleifend. Sed vehicula
              accumsan pretium. Duis fringilla quam sit amet sagittis feugiat.
              Etiam nisi leo, malesuada id hendrerit sit amet, dictum in dolor.
              Integer venenatis lacus eu ultricies sollicitudin. Etiam sed
              dictum justo. Phasellus congue iaculis tortor, vel volutpat enim
              gravida nec. Nam condimentum mi vitae tellus ullamcorper mollis.
              Vivamus id facilisis nunc. Phasellus non erat laoreet, ultrices
              est quis, blandit magna. Morbi gravida et sem eget dapibus. In
              libero lacus, fermentum sit amet ligula in, consequat semper diam.
              Donec elit tortor, ullamcorper vehicula sapien eu, cursus
              fermentum mi. Nam a sagittis sem, ac volutpat lectus. Suspendisse
              potenti. Nunc blandit tincidunt ex vel finibus. Nunc cursus lectus
              eget sapien bibendum placerat. Quisque non tellus neque.
            </p>
          </div>
        </div>
        {/* center section end */}
        <div className={styles.comment_section}>
          <CommentComponent
            blogComments={ssrData.comments}
            blogId={ssrData._id}
          />
        </div>
      </section>
    </div>
  );
}
