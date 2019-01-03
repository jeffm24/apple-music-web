<template>
    <div class="col-sm-2">
        <router-link :to="`/${type}/${id}`" class="card">
            <img :src="imgSrc" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <p v-if="subTitle" class="card-text">
                    {{subTitle}}
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ImgLink',
    props: {
        id: { type: String, required: true },
        type: { type: String, required: true },
        title: { type: String, required: true },
        subTitle: String,
        imgSrc: { type: String, required: true }
    }
}
</script>