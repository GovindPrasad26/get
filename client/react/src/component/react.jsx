import "../App.css"
import axios from "axios"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
function Component(){

    let[state,setState]=useState([])
    useEffect(() => {
        getUser();
      }, []);

    const getUser = () => {
        axios
          .get("http://localhost:2333/method")
          .then((res) => {
            console.log(res)
            setState(res.data.insert);
          })
          .catch((error) => {
            alert("error while fetching user data");
          
          });
      };
      console.log(state)

     function remove(id){

        axios.delete(`http://localhost:2333/removeuser/${id}`).then(()=>{
            getUser()
        }).catch(()=>{
            alert("error while removing the user")
        })
     }

    return(<div>

        <div>
         
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis illum quae asperiores. Autem laboriosam, hic architecto vel eveniet excepturi amet eligendi fuga nobis incidunt exercitationem rem natus laudantium blanditiis!
        Quis maxime quidem similique vero nihil ullam, illum, maiores aperiam, consectetur modi voluptatem error at reprehenderit ex tenetur in a fugiat est minus. Dicta laboriosam fuga eius, porro quidem adipisci.
        Blanditiis excepturi rem harum sapiente libero obcaecati praesentium iste provident ducimus incidunt quae minima corrupti maxime quo vitae, consectetur eaque animi eveniet ratione voluptatibus perspiciatis quia optio! Voluptatibus, laboriosam facere.
        Magnam eveniet quidem obcaecati incidunt laboriosam dolorem! Ad nisi alias velit ea omnis, dolorem vel porro repellat, beatae labore, perferendis cum ab. Alias, quos.
        Temporibus sint quia quibusdam beatae soluta odio eligendi placeat ipsa, at, sapiente molestias possimus unde nostrum numquam et facilis! Amet eos vitae eligendi laboriosam corrupti fugit odit magni voluptatum fugiat.
        Amet facere, similique maxime nam culpa vero nulla ad repellendus aperiam inventore iusto quisquam, labore est, quo commodi incidunt esse minima cumque fugit eligendi omnis nostrum explicabo. Optio, architecto facilis!
        iciis repellendus, qui debitis aut atque sapiente quas ut minima maxime distinctio! Eligendi nihil modi, perferendis dolore repudiandae ex voluptatibus id accusantium.
        Nobis eos, dolores eaque cupiditate cum aspernatur deserunt facere, repellendus quod ipsa nostrum expedita repudiandae velit ex qui aliquid quis vitae nesciunt amet ducimus totam alias consectetur excepturi. Alias, quae?
        Obcaecati sed, harum et vitae eum corporis maiores aliquid. Aspernatur dignissimos voluptate eaque vel assumenda possimus praesentium maiores molestias iste labore, rem necessitatibus quibusdam, atque provident voluptas nihil aut eum.</p>
    </div>
    <div id="space" >
        <table frame="box" rules="all"  >
            <thead>
                <th>Name</th>
                <th>Password</th>
                <th>PhoneNumber</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    state.map(function(element){
                     const {_id}=element
                        return (
                            <tr align="center">
                                <td>{element.name}</td>
                                <td>{element.password}</td>
                                <td>{element.phonenumber}</td>
                                
                                <td>
                           
                           <Link to={`/update/${element._id}`}>
                                    <button>UPDATE</button>
                           </Link>
                             
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        remove(_id)
                                    }}>DELETE</button>
                                </td>
                            </tr>
                             
                        )
                           
                    })
                }
            </tbody>
        </table>
  
    </div>
    </div>)
}
export default Component

