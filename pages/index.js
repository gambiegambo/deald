import Head from 'next/head'
import HeaderSection from '../components/header-section'
import SeachSection from '../components/search-section'
import DropdownSection from '../components/dropdown-section'
import DealSection from '../components/deal-section'
import { firebase } from '../firebase/index';

export default function Home({ locations, categories, promotions }) {
  return (
    <div>
      <Head>
        <title>DealD</title>
        <link rel="icon" href="/favicons.ico"></link>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <SeachSection></SeachSection>
      <HeaderSection></HeaderSection>
      <DropdownSection locations={locations} categories={categories}></DropdownSection>
      <DealSection promotions={promotions}></DealSection>
    </div>
  )
}

export async function getServerSideProps() {
  let locations = {};
  let categories = {};
  let promotions = {};
  await firebase.firestore()
    .collection('locations')
    .get().then(snap => {
      locations = snap.docs.map(doc => ({
        ...doc.data()
      }));
    });
  await firebase.firestore()
    .collection('categories')
    .get().then(snap => {
      categories = snap.docs.map(doc => ({
        ...doc.data()
      }));
    });
  await firebase.firestore()
    .collection('promotions')
    .get().then(snap => {
      promotions = snap.docs.map(doc => ({
        ...doc.data()
      }));
    });
  locations.sort((a, b) => a.name_th > b.name_th ? 1 : -1)
  categories.sort((a, b) => a.name_th > b.name_th ? 1 : -1)
  promotions.sort((a, b) => a.merchant > b.merchant ? 1 : -1)
  return {
    props: {
      locations,
      categories,
      promotions
    }
  }
}
