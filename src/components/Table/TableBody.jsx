const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor]
                ? data[accessor].toLocaleString("en-US")
                : "——";
              const _data =
                accessor === "cost" || accessor === "revenue"
                  ? `USD ${tData}`
                  : tData;
              return (
                <td
                  className={`${accessor === "total" ? `gray-bg` : ""}`}
                  key={accessor}
                >
                  {_data}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
