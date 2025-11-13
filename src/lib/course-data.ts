type Course = {
    name: string;
    colleges: string[];
};
  
const btechCseColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake',
    'Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'National Institute of Technology (NIT)',
    'MCKV Institute of Engineering',
    'B.P. Poddar Institute of Management & Technology',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Guru Nanak Institute of Technology (GNIT)',
    'SurTech',
    'Supreme Knowledge Foundation',
    'Abacus Institute of Engineering & Management',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechCseAimColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'Brainware University',
    'Guru Nanak Institute of Technology (GNIT)',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechCseRoboticsColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'Brainware University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechCseCloudComputingColleges = [
    'IEM Salt Lake & Newtown',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechCseIotColleges = [
    'IEM Salt Lake & Newtown',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Amity University, Kolkata',
    'JIS University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechCseBusinessSystemsColleges = [
    'IEM Salt Lake & Newtown',
    'Adamas University',
    'Techno Main Salt Lake & Techno International Newtown',
    'Amity University, Kolkata',
    'JIS University',
    'Brainware University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechDataScienceColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'National Institute of Technology (NIT)',
    'MCKV Institute of Engineering',
    'B.P. Poddar Institute of Management & Technology',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Guru Nanak Institute of Technology (GNIT)',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechCyberSecurityColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'National Institute of Technology (NIT)',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Guru Nanak Institute of Technology (GNIT)',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const btechItColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'JIS University',
    'National Institute of Technology (NIT)',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Guru Nanak Institute of Technology (GNIT)',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechEceColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Sister Nivedita University (SNU)',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechEeeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechEeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechMeColleges = [
    'IEM Salt Lake & Newtown',
    'Manipal University',
    'Adamas University',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'MCKV Institute of Engineering',
    'Swami Vivekananda University (SVU)',
    'JIS College of Engineering, Kalyani',
    'Supreme Knowledge Foundation',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Shivalik College, Dehradun',
    'Graphic Era Deemed to be University',
];

const btechBiotechnologyColleges = [
    'IEM Salt Lake & Newtown',
    'Adamas University',
    'Techno Main Salt Lake & Techno International Newtown',
    'Heritage Institute of Technology',
    'Amity University, Kolkata',
    'Brainware University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
];

const btechBiomedicalColleges = [
    'Adamas University',
];

const btechAgricultureColleges = [
    'JIS College of Engineering, Kalyani',
    'JIS University',
    'Sister Nivedita University (SNU)',
    'JAIN (Deemed-to-be University)',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
];

const diplomaPolytechnicColleges = [
    'Sister Nivedita University (SNU)',
    'JIS College of Engineering, Kalyani',
    'JIS University',
    'SurTech',
    'Swami Vivekananda University (SVU)',
    'Supreme Knowledge Foundation',
    'Guru Nanak Institute of Technology (GNIT)',
];

const btechMarineEngineeringColleges = [
    'The Neotia University',
    "Siksha 'O' Anusandhan",
    'Mahaveer Academy of Technology and Science University',
];

const btechFoodTechnologyColleges = [
    'Maulana Abul Kalam Azad University of Technology',
    'Hemnalini Memorial College of Engineering',
    'Guru Nanak Institute of Technology',
    'Techno India University',
];

const btechCivilEngineeringColleges = [
    'Heritage Institute of Technology',
    'Netaji Subhash Engineering College',
    'Narula Institute of Technology',
    'Brainware University',
    'Adamas University',
    'Amity university',
    'UEM kolkata',
    'Gargi Memorial Institute of Technology',
];

const mbbsColleges = [
    'JMN Medical College and Hospital',
    'IQ City Medical College Hospital',
    'Jagannath Gupta Institute of Medical Sciences And Hospital',
    'GOURI DEVI INSTITUTE OF MEDICAL SCIENCES AND HOSPITAL',
    'KPC Medical College & Hospital',
    'Shri Ramkrishna Institute of Medical Sciences',
    'Saraswathi Institute of Medical Sciences',
    'Christian Medical College & Hospital'
];

const bdsColleges = [
    'Guru Nanak Institute of Dental Sciences & Research',
    'Kusum Devi Sunderlal Dugar Jain Dental College& Hospital',
    'Haldia Institute of Dental Sciences & Research (HIDSAR)',
    'Dr R Ahmed Dental College and Hospital',
    'Manav Rachna Dental College',
    'Al-Azhar Dental College Thodupuzha'
];

const nursingColleges = [
    'Brainware University',
    'M R GROUP OF COLLEGES & HOSPITALS',
    'Sister Nivedita University (SNU)',
    'Calcutta Institute of Nursing and Paramedical Science',
    'Neotia Academy Nursing Training Institute',
    'Desun Nursing School and College',
    'B.M. Birla College of Nursing',
    'Kalyani IINR',
];

const bscMedicalLabTechColleges = [
    'Swami Vivekananda University (SVU)',
    'JIS University',
    'Brainware University',
    'iLEAD Kolkata',
    'Adamas University',
    'Guru Nanak Institute of Pharmaceutical Science and Technology (GNIPST)',
    'Supreme Knowledge Foundation'
];

const bscOptometryColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'Supreme Knowledge Foundation',
    'NSHM Knowledge Campus, Kolkata',
];

const bscCctColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'Supreme Knowledge Foundation',
];

const bptColleges = [
    'Swami Vivekananda University (SVU)',
];

const bpaColleges = [
    'Brainware University',
];

const bscRadiologyColleges = [
    'Swami Vivekananda University (SVU)',
];

const bpharmColleges = [
    'Bengal School of Technology (BST)',
    'Adamas University',
    'NSHM Knowledge Campus, Kolkata',
    'M.R. College of Pharmaceutical Sciences and Research, Barasat',
    'Shivalik College, Dehradun'
];

const bscAnimationColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Sister Nivedita University (SNU)',
];

const bscMediaScienceColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'EIILM',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bscDataScienceComputationalColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bscCyberSecurityComputationalColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
];

const bcaColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'IEM Salt Lake & Newtown',
    'Techno Main Salt Lake',
    'Techno International Newtown',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
    'JIS University',
];

const mcaColleges = [
    'IEM',
    'JIS University',
    'Brainware University',
    'Adamas University',
    'Techno India Salt Lake',
    'Guru Nanak Institute of Technology (GNIT)',
    'Heritage Institute of Technology',
    'Future Institute of Engineering and Management',
];

const bbaColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'IEM Salt Lake & Newtown',
    'Techno Main Salt Lake',
    'Techno International Newtown',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Adamas University',
    'Supreme Knowledge Foundation',
    'Amity University',
    'JIS University',
    'KIIT',
    'SOA',
    'AMITY NOIDA',
    'JAIN (Deemed-to-be University)',
    'Sathyabama University',
    'Galgotias University',
    'Sharda University',
    'Shiv Nadar Institution of Eminence',
    'Graphic Era Deemed to be University',
];

const bhmColleges = [
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'Techno Main Salt Lake',
    'Brainware University',
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'Supreme Knowledge Foundation',
    'Kalyani IINR',
];

const hotelManagementColleges = [
    'EIILM',
    'Guru Nanak Institute of Hotel Management',
    'IIHM Kolkata',
    'Techno India Salt Lake',
    'Sister Nivedita University (SNU)',
    'NSHM Knowledge Campus, Kolkata',
    'Bengal School of Technology & Management Chuchura',
    'Supreme Knowledge Foundation',
];

const bbaSportsManagementColleges = [
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM',
    'Techno India Salt Lake',
];

const bbaTravelTourismManagementColleges = [
    'Sister Nivedita University (SNU)',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM',
    'Techno India Salt Lake',
];

const bbaDigitalMarketingColleges = [
    'Sister Nivedita University (SNU)',
    'EIILM',
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'iLEAD Kolkata',
    'NSHM Knowledge Campus, Kolkata',
    'IEM',
    'Techno India Salt Lake',
];

const mbaColleges = [
    'EIILM',
    'IEM',
    'Techno India Salt Lake',
    'Bengal Institute of Business Studies (BIBS)',
    'ASMi Business School',
    'Calcutta Business School',
    'Future Institute of Engineering and Management',
    'Globsyn Business School',
    'Adamas University',
    'Praxis Business School',
    'IMI-Kolkata',
    'St. Xavier\'s University',
    'Swami Vivekananda University (SVU)',
    'MCKV Institute of Engineering',
    'Sister Nivedita University (SNU)',
    'Brainware University',
    'Kirloskar Institute of Advanced Management Studies',
    'Regional College of Management',
    'Indus Business Academy (IBA)',
    'International School of Management Excellence (ISME)',
    'International Institute of Business Studies (IIBS)',
    'Acharya Bangalore B-School (ABBS)',
    'Acharya Institute of Management and Sciences (AIMS)',
    'Alliance University',
    'IZEE Business School',
    'JAIN (Deemed-to-be University)',
    'GIBS Business School, Bangalore Campus',
    'NITTE University',
    'CMR University',
    'Ramachandran International Institute Of Management',
    'Pune Institute of Business Management (PIBM)',
    'ISMS Pune',
    'ITM Business School Navi Mumbai',
    'Universal Business School (UBS)',
    'Dr. D. Y. Patil Vidyapeeth, Pune',
    'Lexicon MILE - Management Institute of Leadership and Excellence',
    'Pune Business School',
    'Welingkar Institute of Management Development and Research',
    'Atlas University',
    'FOSTIIMA Business School',
    'Jaipuria Institute of Management',
    'IILM University',
    'Asia Pacific Institute of Management',
    'SOIL Institute of Management',
    'GNIOT MBA Institute',
    'GL Bajaj Institute of Management and Research',
    'I.T.S College Mohan Nagar Ghaziabad',
    'Vignana Jyothi Institute Of Management',
    'Siva Sivani Institute of Management',
];

const mhaColleges = [
    'ISHM - International School Of Hospitality Management',
    'NSHM Kolkata',
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'IIHM Kolkata',
    'IISWBM - Indian Institute of Social Welfare and Business Management',
];

const bbaLlbColleges = [
    'Adamas University',
    'JIS University',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'The Neotia University  (TNU)',
    'Sister Nivedita University (SNU)',
    'Amity University'
];

const baLlbColleges = [
    'Adamas University',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'TThe Neotia University (TNU)',
    'Sister Nivedita University (SNU)',
    'Amity University'
];

const llbColleges = [
    'Adamas University',
    'JIS University',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'The Neotia University (TNU)',
    'Sister Nivedita University (SNU)',
    'Amity University'
];

const bcomLlbColleges = [
    'Sister Nivedita University (SNU)',
    'Amity University'
];

const bscMicrobiologyColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Adamas University',
    'JIS University',
    'Sister Nivedita University (SNU)',
    'The Neotia University (TNU)',
    'Guru Nanak Institute of Pharmaceutical Science and Technology (GNIPST)',
];

const bscBiotechnologyOthersColleges = [
    'Swami Vivekananda University (SVU)',
    'Brainware University',
    'Adamas University',
    'JIS University',
    'Sister Nivedita University (SNU)',
    'The Neotia University (TNU)',
    'Guru Nanak Institute of Pharmaceutical Science and Technology (GNIPST)'
];

const bscForensicScienceColleges = [
    'Adamas University',
    'Sister Nivedita University (SNU)',
];

const bscAgricultureColleges = [
    'Adamas University',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'Sister Nivedita University (SNU)',
    'JIS University',
    'JIS Kalyani',
    'The Neotia University (TNU)',
];

const bscNutritionColleges = [
    'Adamas University',
    'Brainware University',
    'Swami Vivekananda University (SVU)',
    'Sister Nivedita University (SNU)',
    'JIS University',
    'JIS Kalyani',
    'The Neotia University (TNU)',
];

export const courseData: { [key: string]: Course[] } = {
    engineering: [
      { name: 'B.Tech. in Computer Science Engineering (CSE)', colleges: btechCseColleges },
      { name: 'B.Tech. in CSE (AI & ML)', colleges: btechCseAimColleges },
      { name: 'B.Tech. in CSE (Robotics)', colleges: btechCseRoboticsColleges },
      { name: 'B.Tech. in CSE (Cloud Computing)', colleges: btechCseCloudComputingColleges },
      { name: 'B.Tech. in CSE (Internet of Things - IoT)', colleges: btechCseIotColleges },
      { name: 'B.Tech. in CSE (Business Systems - CSBS)', colleges: btechCseBusinessSystemsColleges },
      { name: 'B.Tech. in Data Science', colleges: btechDataScienceColleges },
      { name: 'B.Tech. in Cyber Security', colleges: btechCyberSecurityColleges },
      { name: 'B.Tech. in Information Technology (IT)', colleges: btechItColleges },
      { name: 'B.Tech. in Electronics and Communication Engineering (ECE)', colleges: btechEceColleges },
      { name: 'B.Tech. in Electrical and Electronics Engineering (EEE)', colleges: btechEeeColleges },
      { name: 'B.Tech. in Electrical Engineering (EE)', colleges: btechEeColleges },
      { name: 'B.Tech. in Mechanical Engineering (ME)', colleges: btechMeColleges },
      { name: 'B.Tech. in Biotechnology', colleges: btechBiotechnologyColleges },
      { name: 'B.Tech. in Biomedical Engineering', colleges: btechBiomedicalColleges },
      { name: 'B.Tech. in Agricultural Engineering', colleges: btechAgricultureColleges },
      { name: 'B.Tech. in Civil Engineering', colleges: btechCivilEngineeringColleges },
      { name: 'B.Tech. in Food Technology', colleges: btechFoodTechnologyColleges },
      { name: 'B.Tech. in Marine Engineering', colleges: btechMarineEngineeringColleges },
      { name: 'Diploma / Polytechnic', colleges: diplomaPolytechnicColleges },
    ],
    medical: [
      { name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)', colleges: mbbsColleges },
      { name: 'BDS (Bachelor of Dental Surgery)', colleges: bdsColleges },
    ],
    nursing: [
      { name: 'B.Sc. in Nursing', colleges: nursingColleges },
      { name: 'GNM (General Nursing and Midwifery)', colleges: nursingColleges },
      { name: 'ANM (Auxiliary Nursing Midwifery)', colleges: nursingColleges },
    ],
    paramedical: [
      { name: 'BPT (Bachelor of Physiotherapy)', colleges: bptColleges },
      { name: 'B.Pharm (Bachelor of Pharmacy)', colleges: bpharmColleges },
      { name: 'B.Sc. in Medical Laboratory Technology', colleges: bscMedicalLabTechColleges },
      { name: 'B.Sc. in Optometry', colleges: bscOptometryColleges },
      { name: 'B.Sc. in Critical Care Technology (CCT)', colleges: bscCctColleges },
      { name: 'B.Sc. in Physician Assistant', colleges: bpaColleges },
      { name: 'B.Sc. in Radiology', colleges: bscRadiologyColleges },
    ],
    computational: [
      { name: 'B.Sc. in Animation', colleges: bscAnimationColleges },
      { name: 'B.Sc. in Media Science', colleges: bscMediaScienceColleges },
      { name: 'BCA (Bachelor of Computer Applications)', colleges: bcaColleges },
      { name: 'MCA (Master of Computer Applications)', colleges: mcaColleges },
      { name: 'B.Sc. in Data Science', colleges: bscDataScienceComputationalColleges },
      { name: 'B.Sc. in Cyber Security', colleges: bscCyberSecurityComputationalColleges },
    ],
    management: [
      { name: 'BBA (Bachelor of Business Administration)', colleges: bbaColleges },
      { name: 'BBA Sports Management', colleges: bbaSportsManagementColleges },
      { name: 'BBA Travel & tourism Management', colleges: bbaTravelTourismManagementColleges },
      { name: 'BBA Digital Marketing', colleges: bbaDigitalMarketingColleges },
      { name: 'BHM (Bachelor of Hospital Management)', colleges: bhmColleges },
      { name: 'Bachelor of Hotel and Hospitality Management', colleges: hotelManagementColleges },
      { name: 'MBA (Master of Business Administration)', colleges: mbaColleges },
      { name: 'MHA (masters of hospital management)', colleges: mhaColleges },
    ],
    others: [
      { name: 'B.Sc. in Microbiology', colleges: bscMicrobiologyColleges },
      { name: 'B.Sc. in Biotechnology', colleges: bscBiotechnologyOthersColleges },
      { name: 'B.Sc. in Forensic Science', colleges: bscForensicScienceColleges },
      { name: 'B.Sc. in Agriculture', colleges: bscAgricultureColleges },
      { name: 'B.Sc. in Nutrition', colleges: bscNutritionColleges },
      { name: 'LLB (Bachelor of Laws)', colleges: llbColleges },
      { name: 'BBA LLB', colleges: bbaLlbColleges },
      { name: 'BA LLB', colleges: baLlbColleges },
      { name: 'B.Com LLB', colleges: bcomLlbColleges },
    ],
};