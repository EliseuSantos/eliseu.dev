import Image from "next/image";

const AboutTechnologies = ({url, title, logo}) => {
    return (
        <span
            className="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white">
      <Image
          width={"40"}
          height={"40"}
          src={logo}
          alt={title}
      />
      <a className={'pl-2'} href={url}>{title}</a>
    </span>
    );
};

export default AboutTechnologies;
