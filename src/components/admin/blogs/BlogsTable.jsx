export const BlogsTable = ({ blogs, editForm, deleteBlog }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto w-fit mt-12">
        <table className=" max-w-4xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"> Title </th>
              <th scope="col" className="px-6 py-3"> Created At </th>
              <th scope="col" className="px-6 py-3"> Description </th>

              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(({id, title, description, createdAt}) => (
              <tr key={id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {title}
                </th>
                <td className="px-6 py-4"> {createdAt.split('T')[0]} </td>
                <td className="px-6 py-4 w-full overflow-hidden" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1 }}> {description}</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => editForm({title, description, id})}>Edit</a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteBlog(id)}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
