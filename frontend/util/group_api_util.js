

export const fetchGroups = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/groups'
  });
};

export const fetchGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${id}`
  });
};

export const createGroup = group => {
  return $.ajax({
    method: 'POST',
    url: '/api/groups',
    data: group,
    contentType: false,
    processData: false
  })
}

export const deleteGroup = id => (
  $.ajax({
    url: `api/groups/${id}`,
    method: 'DELETE'
  })
);

export const updateGroup = group => (
  $.ajax({
    url: `api/groups/${group.id}`,
    method: 'PATCH',
    data: { group }
  })
);
