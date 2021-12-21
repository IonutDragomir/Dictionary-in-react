import {Header} from "./content/header"; 
import {SideBox} from "./content/sideBox";
import {InnerContainer} from "./content/innnerContainer";
import {Dictionary} from "./content/dicitionary";
 
 
 
 export const Content = () => {
    return (
      <div className="Content">
        <Header />
        <SideBox />
        <InnerContainer />
        <Dictionary />
      </div>
    );
  };