let MyemployeeDetails=[
    {
        "empid":1,
        "empname":"Manoj",
        "empusername":"Maddy434",
        "emppassword":"Manojkumar12345567",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":2,
        "empsalary":360000
    },
    {
        "empid":2,
        "empname":"Jeejo",
        "empusername":"JeejoChennai",
        "emppassword":"chennai600018",
        "empdesignation":"Trainer",
        "empexp":10,
        "empsalary":6000000
    },
    {
        "empid":3,
        "empname":"Shiyam",
        "empusername":"samsona",
        "emppassword":"samsalem23",
        "empdesignation":"JAVA FULL STACK DEVELOPER",
        "empexp":1,
        "empsalary":240000
    }
]

export const create=(obj)=>
{
    MyemployeeDetails.push(obj)
}

export const list=()=>
{
    return MyemployeeDetails;
}

export const read=(index)=>
{
    return MyemployeeDetails[index]; //Myemployeedetails[2];
}

export  const fetchexact=(name)=>
{
    const temp=MyemployeeDetails.filter((element)=>
    {
        return element.empname===name;
    })

    return temp[0];
}

export const alteration=(ele,index)=>
{
 MyemployeeDetails[index]=ele;
}

export const deleting=(index)=>
{
    var yesno=prompt(" are you sure your values is deleted");
    if(yesno==='yes')
    {
        MyemployeeDetails=MyemployeeDetails.filter((ele,ind)=>
        { 
            return ind!==index;
        })
        return MyemployeeDetails;
    }
    else if(yesno==='no')
    {
        alert('your value is not deleted')
        return MyemployeeDetails;
    }
    else{
        alert("  your values is not deleted")
    }
}