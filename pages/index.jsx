import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout dark>
      <p>
        London-based designer and full-stack developer, with a keen interest in
        sustainability and digital ethics.
      </p>
      <p>
        {/* Founder of{" "}
        <a className="external" href="https://backpocket.sh" target="_blank">
          Backpocket
        </a>
        , a digital design and product agency focused on socially and
  environmentally responsible projects. */}{" "}
        Previously, co-founder{" "}
        <a className="external" href="https://paktastudio.com" target="blank">
          Pakta Studio
        </a>
        , a design studio ethically crafting bags, backpacks and accessories.
      </p>
      <p>
        Utilising a holistic approach to build user-centric products and
        websites without comprising values and standards. You can find me on{" "}
        <a
          className="external"
          href="https://github.com/kerimhudson"
          target="blank"
        >
          Github
        </a>
        ,{" "}
        <a
          className="external"
          href="https://www.linkedin.com/in/kerim-hudson-2323aa219/"
          target="blank"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          className="external"
          href="https://dribbble.com/kerimhudson"
          target="blank"
        >
          Dribbble
        </a>
        .
      </p>
    </Layout>
  );
}
