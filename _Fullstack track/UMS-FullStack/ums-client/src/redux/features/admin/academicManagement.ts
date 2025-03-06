
import { TAcademicSemester, TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({

            query: (args) => {
                const params = new URLSearchParams();
                if(args){
                    args.forEach((i : TQueryParams) => params.append(i.name, i.value as string))
                }
               
                return {
                    url: '/academic-semesters/',
                    method: 'GET',
                    params: args
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcadmeicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useGetAllSemestersQuery, useAddAcadmeicSemesterMutation } = academicManagementApi