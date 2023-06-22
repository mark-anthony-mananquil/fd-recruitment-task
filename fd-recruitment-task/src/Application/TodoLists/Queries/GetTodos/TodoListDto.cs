﻿using Todo_App.Application.Common.Mappings;
using Todo_App.Domain.Entities;

namespace Todo_App.Application.TodoLists.Queries.GetTodos;

public class TodoListDto : IMapFrom<TodoList>
{
    public TodoListDto()
    {
        Items = new List<TodoItemDto>();
    }

    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Colour { get; set; }

    public bool? IsDeleted { get; set; }

    private IList<TodoItemDto> items;

    public IList<TodoItemDto> Items
    {
        get => items.Where(item => item.IsDeleted == null).ToList();
        set => items = value;
    }
}
