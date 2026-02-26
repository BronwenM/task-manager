import { useParams } from "react-router-dom"

const GroupDisplayPage = () => {
  const { groupId } = useParams();

  /* use groupId to fetch group data or perform other actions */

  return (
    <>
      <h1>Group Display Page</h1>
      <p>Group ID: {groupId}</p>
      {/* list of tasks associated with groupID */}
    </>
  )
}

export default GroupDisplayPage