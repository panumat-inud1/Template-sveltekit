<script context="module">
    export async function load() {
        return {
            status: 302,
            redirect: "/login"
        };
    }
</script>

<!--  
<script context="module">
    export async function load({ session }) {
        const { user } = session;

        if (! user) {
            return {
                status: 302,
                redirect: "/login"
            };
        }

        return {};
    }
</script>

-->