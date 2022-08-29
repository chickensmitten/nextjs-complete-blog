import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2022-08-10",
  content: `# Lateantque gradibus

  ## Lupi tabellae derecti noxque spectacula terga in
  
  Lorem markdownum erat poteras signa: Haemum a omnibus nostraque? Mactatos et
  honorem egesto, quaque me super pars animae; ut sanguis. Acheloides fonte
  multaque armenti squalentia trahens pressa: urit ripis timido posuerunt corpore,
  est domus. Senex et Pergama in obstrusaque esse supplevit siquid dedit; *partus
  agat*: gregesque Saturnia inroravit lacerto erat: vultu. Totiens micante potes,
  sic novavit auxilium illa.
  
  Cum carebat cantat. Tua nec derexit [esto](http://umerique.net/): illud nec
  quaque **sine tempore solis** rebus quoque queat et quique.
  
  > Et altam aes ante crescunt cruorem certa manebunt, modo? Deum colla vocato
  > dolor rependis, et dicam. Absumere possunt mavult collaque madidos, iuvenes
  > per caret iacet calathis vicibus, quem fratris revelli eripe quodcumque
  > sensit. Celat inque maiora membris et vestem colla umeri pronepos maduisse
  > tulerat luxit morte. Nempe Avernales **inque**, immo ubi laetitiam atque
  > furores enim, nil?`,
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
