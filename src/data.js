// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href:'/', name: 'home' },
  { href:'#about', name: 'about' },
  { href:'#menu', name: 'menu' },
  { href:'#team', name: 'team' },
  { href:'#testimonials', name: 'testimonials' },
  { href:'#book', name: 'book a table' },
  { href:'#contact', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Join us for a celebration of flavors and experience the essence of our community in every bite. ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    "Bistro Cafe was born from a shared passion for local, bio ingredients. Our journey began with a humble kitchen and a vision: to create exceptional, handcrafted dishes.",
  subtitle2:"Today, we're a community-driven haven, where every plate tells a story of dedication to excellence, fostering moments that bring families, friends, and food enthusiasts together. At our heart, we're committed to nurturing a sustainable, flavorful future.",
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: "Exploring the Season's Culinary Wonders",
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Velvet Symphony',
      price: '$7.99',
      description: 'An indulgent chocolate masterpiece, rich and velvety',
    },
    {
      image: MenuImg2,
      name: "Lumberjack's Bounty",
      price: '$9.49',
      description: 'A hearty, meaty feast inspired by the great outdoors',
    },
    {
      image: MenuImg3,
      name: 'Burger Reverie',
      price: '$8.50',
      description: 'A plant-based masterpiece, a dreamy delight',
    },
    {
      image: MenuImg4,
      name: 'Inferno Rhapsody',
      price: '$9.99',
      description: ' A flavorful odyssey blazing through the jungle for adventurous eaters.',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: "Introducing our maestro of flavors, a culinary journeyman whose path meanders through the world's most celebrated kitchens.",
  sub2: 'Every dish is a chapter from his vibrant voyage, weaving tales of global inspiration, where spices tell stories, ingredients paint pictures, and every bite shares a cultural narrative, transporting you to far-flung culinary destinations. Taste his world in every creation.',
  name: 'Bartholomeo Díaz',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "What a pleasant surprise to come across this charming spot! The food here is simply fantastic. I had a burger that was a delightful flavor explosion. Can't wait to return and explore more culinary treasures.",
      image: Avatar1,
      name: 'Rick Thompson',
      date: 'November 2, 2023',
    },
    {
      message:
        "I had the pleasure of discovering this remarkable establishment. The cuisine on offer is truly exceptional. I savored a burger that was a testament to culinary artistry. I look forward to future visits and more culinary adventures.",
      image: Avatar2,
      name: 'John Doe',
      date: 'October 24, 2023',
    },
    {
      message:
      "This restaurant is a true gem in the culinary world. The burger I indulged in was a revelation of flavors. Each bite was a delightful journey. I'm excited to dine here again and explore the menu further.",
      image: Avatar3,
      name: 'Henry A.',
      date: 'October 4, 2023',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.',
  subtitle2: 'Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest menus & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: 'Smíchov CZ, Nádražní 54/102, Anděl, 150 00 Praha 5, Czechia',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '11:00 AM - 11:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '08:00 AM - 12:00 AM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
