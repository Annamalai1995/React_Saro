
import  './MycssFile.css'
export let StudentDetails=()=>
{
    const anothercss={backgroundColor:'red'}
    return(
        <>
        <table style={anothercss}>
            <thead id="Headers">
                <tr>
                    <th>S.no</th>
                    <th>StudentName</th>
                    <th>StudentDepartment</th>
                    <th>StudentAddress</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Annamalai</td>
                    <td>BEcse</td>
                    <td>Salem</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sathish</td>
                    <td>BE</td>
                    <td>Chennai</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Saravana</td>
                    <td>BE</td>
                    <td>Salem</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}