import React from "react";
import Title from "../components/Title";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border*t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex glex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src="/about.jpg" alt="About" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Jeweler, we believe that jewelry is more than just an
            accessory—it’s a reflection of your story, emotions, and timeless
            beauty. With a deep passion for craftsmanship and elegance, we
            create exquisite pieces that combine artistry, precision, and
            high-quality materials.
          </p>

          <p>
            Our journey began with a vision to redefine luxury, blending
            traditional techniques with modern design. Each piece in our
            collection is meticulously handcrafted by skilled artisans who bring
            decades of experience and dedication to their work. We source only
            the finest gemstones and precious metals, ensuring that every ring,
            necklace, bracelet, or earring radiates brilliance and
            sophistication.{" "}
          </p>

          <p>
            What sets us apart is our commitment to personalization. Whether you
            seek a custom engagement ring, a one-of-a-kind heirloom, or a
            delicate everyday piece, we work closely with our clients to
            transform their ideas into reality. Our bespoke designs capture
            individuality, making every creation as unique as the person wearing
            it.{" "}
          </p>

          <p>
            At Jeweler, sustainability is at the heart of what we do. We
            prioritize ethically sourced materials and eco-friendly production
            practices, ensuring that beauty and responsibility go hand in hand.
          </p>
          <b>Jewelry tells a story—let us help you write yours.</b>
        </div>
      </div>
    </div>
  );
};

export default About;
