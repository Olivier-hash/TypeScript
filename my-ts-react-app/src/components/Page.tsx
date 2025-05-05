//REACT.CSS PROPERTIES
// import Button from "./Button";

// export default function Home (){
//     return(
//         <main className="min-h-screen flex justfy-center items-center">
//             <Button backgroundColor="red" textColor="purple" fontSize={30} />
//         </main>
//     );
// }

import Button from "./Button";

export default function Home (){
    return(
        <main className="min-h-screen flex justfy-center items-center">
            <Button style={{
                backgroundColor: 'red',
                textColor: 'white',
                fontSize: 24,
            }} />
        </main>
    );
}