


const TaskDetail = async ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = await params;

  return (
    <div>
      Task ID: {id}
    </div>
  )
}

export default TaskDetail;


