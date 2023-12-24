import { Form2Template } from '@template/index'

// Dummy data
const dummyData = {
   title: 'Placeholder Title',
   content: 'This is some placeholder content.',
}

export async function getStaticPaths() {
   // Fetch dynamic IDs from an API or use predefined IDs
   const ids = [1, 2, 3] // Array of dynamic IDs

   const paths = ids.map((id) => ({
      params: { id: id.toString() },
   }))

   return { paths, fallback: false } // fallback: false means 404 for non-matching paths
}

export async function getStaticProps() {
   // Here, you might fetch real data based on the dynamic id
   // For the sake of demonstration, using dummyData
   const data = dummyData

   return {
      props: {
         data,
      },
   }
}

const Form2Page = ({ params: { id } }) => {
   return <Form2Template id={id} />
}

export default Form2Page
