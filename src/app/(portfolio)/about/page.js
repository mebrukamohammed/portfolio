
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const About = () => {
    return ( <>
   <div>
  {/* Page Header */}
  <h1 className="flex items-center justify-center text-center text-4xl font-bold md:text-6xl mb-8">
  WHO I AM ?
</h1>

  {/* Main content wrapper with a comfortable maximum reading width */}
<section className="w-full px-6 py-12 md:px-12">
  <p className="w-full text-white text-md leading-relaxed text-justify">
    I am Mebruka Mohammed, currently a 3rd-year Computer Science student at Addis Ababa University, having completed my primary education at Alif KG-Primary and Secondary School. Since that time, Ive maintained a passion for looking beyond standard frameworks and constantly planning to build new things. I then attended Memhir Akalwold Secondary School with a special class cohort in Dessie, where I graduated with highly distinguished marks on my national exams, earning placement in Africas 10th-ranked university. Recognizing how the world is advancing through technological revolutions and Ethiopias bold steps toward digitalization, combined with my previous experiences, I chose Computer Science for my bachelors degree. Since enrolling, I have embraced the dedication required to be a skilled software developer and a collaborative team player—knowing that software is built on teamwork. From frontend development with React and JavaScript to full-stack engineering in Next.js and supervised machine learning with Python, I continue to expand my expertise into systems engineering and software project management.
  </p>
</section>
</div>
<ImageSlider/>



    
    
    
    </> );
}
 
export default About;
   

   




