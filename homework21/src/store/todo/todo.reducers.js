const initialState = {
    todoList: [],
    doneTodos: [],
    incompleteTodos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                incompleteTodos: [...state.todoList, action.payload].filter(todo => !todo.isComplete),
            };
        case 'MARK_AS_DONE':
            const updatedTodoList = state.todoList.map(todo =>
                todo.id === action.payload ? { ...todo, isComplete: true } : todo
            );
            return {
                ...state,
                todoList: updatedTodoList,
                incompleteTodos: updatedTodoList.filter(todo => !todo.isComplete),
                doneTodos: updatedTodoList.filter(todo => todo.isComplete),
            };
        case 'DELETE_TODO':
            const filteredTodoList = state.todoList.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todoList: filteredTodoList,
                incompleteTodos: filteredTodoList.filter(todo => !todo.isComplete),
                doneTodos: filteredTodoList.filter(todo => todo.isComplete),
            }
        default:
            return state;
    }
};

export default todoReducer;
