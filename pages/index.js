import { createClient } from '../common/contentful';

import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <div className="text-center">    
      <h1>Hello from Next</h1>
      <p className="lead">Lorem ipsum... yeah whatever...</p>
      {/* <p>{someEntryAsProp.fields.text}</p> */}
      <img className="img-fluid w-75 mt-4" src="static/boiling_plates.svg" />
    </div>
  </Layout>
);

// Index.getInitialProps = async () => {
//   const client = createClient();

//   const entries = await client.getEntries({
//     // some query
//   });
  
//   return { someEntryAsProp: entries.items[0] };
// };

export default Index;