import React from 'react'
import Tile from '../components/Tile'
const people = [
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20210615110838000686.jpg",
    name: "Dr. Sandesh B J",
    role: "Chairperson, Professor",
    email: "sandesh_bj@pes.edu",
    slots: 4,
  },
  {
    name: "Dr. Arti Arya",
    role: "Professor",
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230920113626192596_Arti_Arya.jpg",
    email: "artiarya@pes.edu",
    slots: 4,
  },
  {
    name: "Deepa S",
    role: "Professor",
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230925033325983162_deepa_s_1.jpg",
    email: "deepa.s@pes.edu",
    slots: 4,
  },
  {
    name: "Dr. Farida Begam M",
    role: "Professor",
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20240226084029459630_Dr_M_Farida_Begam_1.jpg",
    email: "farida.begam@pes.edu",
    slots: 4,
  },
  {
    name: "Dr. Pooja Agarwal",
    role: "Professor",
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230920111907588323_Pooja_Agarwal.jpg",
    email: "poojaagarwal@pes.edu",
    slots: 4,
  },
  {
    name: "Dr. Prashanth Athri",
    role: "Professor",
    image: "https://staff.pes.edu/static/images/def.png",
    email: "athri@pes.edu",
    slots: 4,
  },
  {
    name: "Dr. Sarasvathi V",
    role: "Professor",
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230920081456706599_Sarasvathi_V.jpg",
    email: "sarsvathiv@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921062645765137_Animesh_Giri.jpg",
    name: "Animesh Giri",
    role: "Associate Professor",
    email: "animeshgiri@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921065504695350_Dr._Chandrashekhar_P_Chavan.jpg",
    name: "Dr. Chandrashekhar P Chavan",
    role: "Associate Professor",
    email: "cpchavan@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/image_20230704055327_72fda189.jpg",
    name: "Dr. Charu Kathuria",
    role: "Associate Professor",
    email: "charu.kathuria@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921063510563513_Dr._Clara_Kanmani_A.jpg",
    name: "Dr. Clara Kanmani A",
    role: "Associate Professor",
    email: "clarakanmani.a@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921060932209849_Dr._Geetha_D.jpg",
    name: "Dr. Geetha  D",
    role: "Associate Professor",
    email: "geethadayalan@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230919114118919410_Jeny_Jijo.jpg",
    name: "Jeny Jijo",
    role: "Associate Professor",
    email: "jenyjijo@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921063651137639_Dr._Kamatchi_Priya_L.jpg",
    name: "Dr. Kamatchi Priya L",
    role: "Associate Professor",
    email: "priyal@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20250310191720253369_Dr.KavithaP.jpg",
    name: "Dr. Kavitha P",
    role: "Associate Professor",
    email: "pkavitha@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20250305125327976298_manju.jpg",
    name: "Dr. Manju",
    role: "Associate Professor",
    email: "manju.nunia@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20241104134411620925_staff041124.jpg",
    name: "Dr. Richa Sharma",
    role: "Associate Professor",
    email: "richasharma@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230919113220821269_Saritha.jpg",
    name: "Dr. Saritha",
    role: "Associate Professor",
    email: "saritha.k@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20241104132139605824_New_Project.jpg",
    name: "Dr. Sharavana K",
    role: "Associate Professor",
    email: "sharavana.kk@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20240329050040046518_Surbhi.jpg",
    name: "Surbhi Choudhary",
    role: "Assistant Professor",
    email: "surbhichoudhary@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20240807031747019295_New_Project.jpg",
    name: "Swathi Priya N",
    role: "Assistant Professor",
    email: "swathipriya.n@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20240119095639868016_Pavithra_S_1.jpg",
    name: "Pavithra S",
    role: "Assistant Professor",
    email: "pavithra.s@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20250311180213852108_Dr_R_Nandhi_Kesavan.jpg",
    name: "Dr. R Nandhi Kesavan",
    role: "Assistant Professor",
    email: "Nandhi.Kesavan@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921081828614623_Sheela_Devi_M.jpg",
    name: "Sheela Devi M",
    role: "Assistant Professor",
    email: "sheelam@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230921082603629580_Shilpa_S.jpg",
    name: "Shilpa S",
    role: "Assistant Professor",
    email: "shilpas@pes.edu",
    slots: 4,
  },
  {
    image: "https://storage.googleapis.com/chrome-ability-447306-j9.appspot.com/staff/Uploads/20230919120015326284_Shruthi_L.jpg",
    name: "Shruthi L",
    role: "Assistant Professor",
    email: "shruthil@pes.edu",
    slots: 4,
  },
];
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person, index) => {
          return <Tile key={index} {...person} />
        })}
      </div>
    </div>
  );
}

export default Home