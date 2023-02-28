export const state = () => ({
  name: '',
  email: '',
  gender: '',
  age: '',
  phone: '',
  team_id: '',
  role_id: '',
  role_name: ''
})

export const mutations = {
  updateName(state, payload) {
    state.name = payload
  },
  updateEmail(state, payload) {
    state.email = payload
  },
  updateGender(state, payload) {
    state.gender = payload
  },
  updateAge(state, payload) {
    state.age = payload
  },
  updatePhone(state, payload) {
    state.phone = payload
  },
  updateTeamId(state, payload) {
    state.teamId = payload
  },
  updateRoleId(state, payload) {
    state.roleId = payload
  },
  updateRoleName(state, payload) {
    state.rleName = payload
  },
}