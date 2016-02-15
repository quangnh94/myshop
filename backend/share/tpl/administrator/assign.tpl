<div class="body-assign">
    <% $.each(data.group, function(k, value){ %>
    <div class="box-body">
        <table class="table table-bordered">
            <div class="split_group">
                <tr>
                    <th style="width: 30px"></th>
                    <th style="font-size: 13px; padding-left: 15px; text-transform: uppercase"><%= value.group_name %></th>
                </tr>
                <% $.each(data.items, function(key, val){ %>
                <% if(val.group_id == value.id){ %>
                <tr>
                    <td class="text-center"><input type="checkbox" value="<%= val.name %>" name="<%= val.name %>"/></td>
                    <td style="text-align: justify; padding-left: 15px;"><%= val.alias %></td>
                </tr>
                <% } %>
                <% }); %>
            </div>
        </table>
    </div>
    <% }); %>
</div>
