<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<!-- <template>
    <div class="container">
        <div class="navbar">helo</div>

        <div class="main">
            
        </div>
        <div class="footer">skbbfhks</div>
    </div>
</template> -->
<template>
    <v-layout class="rounded rounded-xll">
        <v-navigation-drawer>
            <v-list>
                <v-list-item title="">
                    <div class="sidebar">
                        <v-card>
                            <v-layout>
                                <v-navigation-drawer
                                    class="bg-deep-purple"
                                    theme="dark"
                                    permanent   
                                >
                                    <v-list color="transparent">
                                        <v-list-item
                                            prepend-icon="mdi-view-dashboard"
                                            title="Dashboard"
                                        ></v-list-item>
                                        <v-list-item
                                            prepend-icon="mdi-account-box"
                                            title="Account"
                                        ></v-list-item>
                                        <v-list-item
                                            prepend-icon="mdi-gavel"
                                            title="Admin"
                                        ></v-list-item>
                                    </v-list>

                                    <template v-slot:append>
                                        <div class="pa-12">
                                            <v-btn block> Logout </v-btn>
                                        </div>
                                    </template>
                                </v-navigation-drawer>
                                <v-main style="height: 700px"></v-main>
                            </v-layout>
                        </v-card>
                    </div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar title="Application bar"></v-app-bar>

        <v-main
            class="d-flex align-center justify-center"
            style="min-height: 100px"
        >
            <!-- Main Content -->
            <v-table class="bg-deep-purple justify-center">
                <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sadf</td>
                        <td>sa</td>
                    </tr>
                </tbody>
            </v-table>
        </v-main>
    </v-layout>
</template>

<style scoped></style>
