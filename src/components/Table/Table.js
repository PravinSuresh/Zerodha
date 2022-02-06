const Table = ({headerData, mainData, footerData})=>{
    // const stocks = mainData.map(item=>item);
    const details = mainData.map(stock=>Object.values(stock));
    const inner = details.map(detail=>detail);//.map(console.log("inner: ",detail)));
    const tiny = inner.map(item=>(item.filter(i=>i!=="kite")));
    console.log("tiny", tiny);
    return(
        <>
    {console.log(headerData)}
    {/* {console.log(mainData.map(item=>console.log(Object.values(item))))} */}
            <table>
                <thead>
                    <tr>
                        {headerData.map(data=><th key={data}>{data}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tiny.map(details=><tr>{details.map(detail=><td>{detail}</td>)}</tr>)}
                </tbody>
                <tfoot>
                    <tr>{footerData.map(data=><td key={data}>{data}</td>)}</tr>
                </tfoot>
            </table>
        </>
    );
}


export default Table;