export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
});

export const markAsDoneAction = (todoId) => ({
    type: 'MARK_AS_DONE',
    payload: todoId
  });


export const deleteTodoAction = (todoId) => ({
    type: 'DELETE_TODO',
    payload: todoId
});


