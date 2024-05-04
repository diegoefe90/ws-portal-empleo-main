import React from 'react';
import CardList from './Componentes/CardList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 const cardData1 = {
  logo: "https://peaku.co/img/company.svg",
  nombre: "Director comercial",
  habilidades: ["Business Analysis", "Commercial Relationship", "Commercial Strategy"],
  empresa: "Confidencial",
  lugar: "Bucaramanga",
  salario: "Confidencial",
  vacantes: "1 vacante",
  actualizado: "about 2 hours ago",
  beneficios: "",
 };

 const carData2 = {
  logo: "https://peaku.co/img/company.svg",
  nombre: "E-commerce & SEO Specialist",
  habilidades: ["Email Marketing",  "WordPress",  "Ecommerce"],
  empresa: "Skla Consulting",
  lugar: "Bogota",
  salario: "$ 4M - 6M COP",
  vacantes:"1 vacante",
  actualizado: "about 2 hours ago",
  beneficios: "",
 };
 
 const carData3 = {
  logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/4310/vichara.jpeg",
  nombre: "Growth Manager",
  habilidades: ["Negotionation Skills",  "Project Management",  "Lead Work Teams"], 
  empresa: "Vichada Technologies",
  lugar: "Hibrido",
  salario: "Confidencial",
  vacantes: "1 vacante",
  actualizado: "about 23 hours ago",
  beneficios: "",
 };

 const cardData4 = {
  logo:"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/41942/metf.png",
  nombre: "Ejecutivo comercial senior, en MetLife",
habilidades: ["Commercial Aggressiveness", "Negotiating Capacity "],
empresa: "MetLife Medellin",
lugar: "Medellin",
salario:  "2.9M - 6M COP",
vacantes: "1 Vacante",
actualizado: "1 day ago",
beneficios: "",
 };

 const cardData5 = {
  logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/41942/metf.png",
nombre: "Consultor SAP FI",
habilidades: ["SAP FI",  "Database - Sap"],
empresa: "Accenture",
lugar: "Remoto en colombia",
salario: "confidencial",
vacantes: "1 Vacante",
actualizado: "1 day ago",
beneficios: "",
 };

 const cardData6 = {
  logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png",
  nombre: "Analista de calidad",
  habilidades: ["Qa",  "Adaptation To Changes"],
  empresa: "OFFIMEDICAS S.A",
  lugar: "Bucaramanga",
  salario: "$1.5M",
  vacantes: "1 Vacante",
  actualizado: "1 day ago",
  beneficios: "",
 };

 const carData7 = {
  logo: "https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png",
nombre: "Coordinador de calidad",
habilidades: ["Qa", "Adaptation To Changes"],
empresa: "OFFIMEDICAS S.A",
lugar: "Bucaramanga",
salario: "$2.5M",
vacantes: "1 Vacante",
actualizado: "1 day ago",
beneficios: "", 
 };

 return (
    <div className="App">
      <CardList cards={[cardData1, carData2, carData3, cardData4, cardData5, cardData6, carData7 ]} />
    </div>
 );
};

export default App;