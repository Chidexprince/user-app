<script> 
  export let data;
  const users = data.users;
</script>

<main>
  <div class="container">
    <h1>User List</h1>
    
    {#if users.length > 0}
      <div class="row">
        {#each users as user (user.id)}
        <div class="col-md-3">
          <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.email}</p>
              <p class="card-text">{user.phone}</p>
              <a href={`/user/${user.id}`} class="btn btn-primary">
                See Details
              </a>
            </div>
          </div>
    </div>
        {/each}
      </div>
    {:else}
      <p class="text-center">No users available.</p>
    {/if}
  </div>
</main>