import { Deduplication } from "./components/Deduplication"
import { WithoutTanStackQuery } from "./components/WithoutTanStackQuery"
import { WithTanstackQuery } from "./components/WithTanstackQuery"
import { StaleTime } from './components/StaleTime';
import { RefetchInterval } from './components/RefetchInterval';
import { FetchFromMultiplesEndpoints } from './components/FetchFromMultiplesEndpoints';
import { MutatedData } from "./components/MutatedData";
import { Pagination } from './components/Pagination';

const App = () => {
  return (
    <>
        <WithoutTanStackQuery/>
        <WithTanstackQuery/>
        <Deduplication/>
        <Deduplication/>
        <StaleTime/>
        <RefetchInterval/>
        <FetchFromMultiplesEndpoints/>
        <MutatedData/>
        <Pagination/>
    </>

  )
}

export default App