



const TaskDetail = ({ params }: { params: { id: string } }) => {

  const { id } = params; 

  return (
    <div>
      Task ID: {id}
    </div>
  )
}

export default TaskDetail;
