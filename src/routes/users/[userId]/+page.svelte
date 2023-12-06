<script>
  export let data;
  const user = data.user;
</script>

<main>
    <div class="container">
        <div class="d-flex justify-content-center align-items-content"> 
            <div class="card w-100 mt-4 text-center">
                  <div class="card-header">
    {user.username}
  </div>
  <div class="card-body">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.email}</p>
    <p class="card-text">{user.phone}</p>
    <p class="card-text">{user.website}</p>
  </div>
  <div class="card-footer text-muted">
    {user.address.suite} {user.address.street} {user.address.city}
  </div>
            </div>
        </div>
    </div>
    
</main>