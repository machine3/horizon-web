export default {
  'pages.common.next': '下一步',
  'pages.common.back': '上一步',
  'pages.common.submit': '提交',

  'pages.pods.nextStep': '下一批次',

  'pages.groups.New subgroup': '创建子分组',
  'pages.groups.New application': '创建应用',
  'pages.groups.New group': '创建分组',
  'pages.groups.New cluster': '创建集群',
  'pages.groups.edit': '编辑',

  'pages.applicationNew.config.application': '部署配置',
  'pages.applicationNew.config.pipeline': '构建配置',
  'pages.applicationNew.header': '正在为【 {group} 】创建应用，请按步骤填写信息',
  'pages.applicationNew.success': '应用创建成功',
  'pages.applicationNew.step.one': '服务模版',
  'pages.applicationNew.step.two': '配置服务',
  'pages.applicationNew.step.three': '自定义配置',
  'pages.applicationNew.step.four': '审计',
  'pages.applicationNew.step.message': '第 {index} 步',
  'pages.applicationNew.basic.title': '应用基础信息',
  'pages.applicationNew.basic.name.ruleMessage': '应用名是必填项，支持字母、数字和中划线的组合，且必须以字母开头',
  'pages.applicationNew.basic.name': '应用名',
  'pages.applicationNew.basic.description': '应用描述',
  'pages.applicationNew.basic.description.ruleMessage': '长度上限为255个字符',
  'pages.applicationNew.basic.release': '模版版本',
  'pages.applicationNew.basic.priority': '应用优先级',
  'pages.applicationNew.basic.repo': 'Git仓库',
  'pages.applicationNew.basic.url': '地址',
  'pages.applicationNew.basic.subfolder': '代码目录',
  'pages.applicationNew.basic.branch': '分支',
  'pages.applicationNew.basic.template': '模版',
  'pages.applicationEdit.success': '更新应用成功',
  'pages.applicationEdit.header': '正在编辑【 {application} 】，请按步骤填写信息',
  'pages.applicationNew.basic.recommendedRelease': '推荐版本',

  'pages.applicationDetail.basic.createTime': '创建时间',
  'pages.applicationDetail.basic.updateTime': '更新时间',
  'pages.applicationDetail.basic.release': '模版版本',
  'pages.applicationDetail.basic.recommendedRelease': '推荐模板版本',
  'pages.applicationDetail.basic.edit': '编辑',
  'pages.applicationDetail.basic.operate': '操作',
  'pages.applicationDetail.basic.createCluster': '创建集群',
  'pages.applicationDetail.basic.delete': '删除应用',
  'pages.applicationDetail.basic.detail': '详情',
  'pages.applicationDetail.basic.config': '配置',
  'pages.applicationDelete.success': '应用删除成功',
  'pages.applicationDelete.confirm.title': '是否确定要删除该应用:{application}?',
  'pages.applicationDelete.confirm.content': `注意：删除后应用将无法恢复`,
  'pages.applicationDelete.confirm.ok': '确定',
  'pages.applicationDelete.confirm.cancel': '取消',
  'pages.confirm.ok': '确定',
  'pages.confirm.cancel': '取消',
  'pages.clusterNew.config.application': '部署配置',
  'pages.clusterNew.config.pipeline': '构建配置',
  'pages.clusterNew.header': '正在为【 {application} 】创建集群，请按步骤填写信息',
  'pages.clusterNew.success': '集群创建成功',
  'pages.clusterNew.step.one': '配置集群',
  'pages.clusterNew.step.two': '自定义配置',
  'pages.clusterNew.step.three': '审计',
  'pages.clusterNew.step.message': '第 {index} 步',
  'pages.clusterNew.basic.title': '集群基础信息',
  'pages.clusterNew.basic.name.ruleMessage': '集群名是必填项，支持字母、数字和中划线的组合，且必须以字母开头',
  'pages.clusterNew.basic.name': '集群名',
  'pages.clusterNew.basic.description': '集群描述',
  'pages.clusterNew.basic.description.ruleMessage': '长度上限为255个字符',
  'pages.clusterNew.basic.repo': 'Git仓库',
  'pages.clusterNew.basic.url': '地址',
  'pages.clusterNew.basic.subfolder': '代码目录',
  'pages.clusterNew.basic.branch': '分支',
  'pages.clusterNew.basic.environment': '环境',
  'pages.clusterNew.basic.region': '区域',
  'pages.clusterEdit.header': '正在编辑【 {cluster} 】，请按步骤填写信息',
  'pages.clusterEdit.success': '集群更新成功',
  'pages.clusterEdit.prompt.buildDeploy.title': '是否进行构建发布？',
  'pages.clusterEdit.prompt.buildDeploy.create.content': '构建发布：拉取代码构建并基于构建产物进行发布。\n该集群模板包含构建配置，需要构建发布后才可生效。',
  'pages.clusterEdit.prompt.buildDeploy.edit.content': '构建发布：拉取代码构建并基于构建产物进行发布。\n本次修改涉及构建配置，需要构建发布后才可生效。',
  'pages.clusterEdit.prompt.deploy.title': '是否进行直接发布？',
  'pages.clusterEdit.prompt.deploy.create.content': '直接发布：基于已有的构建产物进行发布。\n该集群无构建配置，发布完成即可生效。',
  'pages.clusterEdit.prompt.deploy.edit.content': '直接发布：基于已有的构建产物进行发布。\n本次修改不涉及构建配置，发布完成即可生效。',

  'pages.clusterDetail.basic.detail': '详情',
  'pages.clusterDetail.basic.config': '配置',
  'pages.clusterDetail.basic.name': '集群名',
  'pages.clusterDetail.basic.description': '集群描述',
  'pages.clusterDetail.basic.release': '模版版本',
  'pages.clusterDetail.basic.priority': '集群优先级',
  'pages.clusterDetail.basic.repo': 'Git仓库',
  'pages.clusterDetail.basic.url': '地址',
  'pages.clusterDetail.basic.subfolder': '代码目录',
  'pages.clusterDetail.basic.branch': '分支',
  'pages.clusterDetail.basic.createTime': '创建时间',
  'pages.clusterDetail.basic.updateTime': '修改时间',
  'pages.clusterDelete.success': '集群删除成功',
  'pages.clusterDelete.confirm.title': '是否确定要删除该集群:{cluster}?',
  'pages.clusterDelete.confirm.content': `注意：删除后集群将无法恢复`,
  'pages.clusterDelete.confirm.ok': '确定',
  'pages.clusterDelete.confirm.cancel': '取消',
  'pages.clusterDetail.basic.edit': '编辑',
  'pages.clusterDetail.basic.operate': '操作',
  'pages.clusterDetail.basic.delete': '删除',

  'pages.cluster.podsTable.podName': '副本',
  'pages.cluster.podsTable.status': '状态',
  'pages.cluster.podsTable.onlineStatus': '上线状态',
  'pages.cluster.podsTable.restartCount': '重启次数',
  'pages.cluster.podsTable.createTime': '创建时间',
  'pages.cluster.podsTable.action': '操作',
  'pages.cluster.podsTable.online': '上线',
  'pages.cluster.podsTable.offline': '下线',
  'pages.cluster.podsTable.restartPod': '重启Pod',

  'pages.pipelineNew.submit': '流水线创建成功，开始发布',
  'pages.pipelineNew.title': '标题',
  'pages.pipelineNew.description': '描述',
  'pages.pipelineNew.branch': '分支',
  'pages.pipelineNew.changes': '变更',
  'pages.pipelineNew.codeChange': '代码变更',
  'pages.pipelineNew.configChange': '配置变更',

  'pages.application.members.title': '应用成员',
  'pages.groups.members.title': '分组成员',
  'pages.cluster.members.title': '集群成员',
  'pages.members.user.title': '添加用户',
  'pages.members.user.email.label': '用户',
  'pages.members.user.email.threshold': '搜索用户名称或者邮箱地址',
  'pages.members.user.email.message': '请选择用户',
  'pages.members.user.role.label': '角色',
  'pages.members.user.role.message': '请选择角色',
  'pages.members.user.invite': '添加',
  'pages.transfer': '转移',
  'pages.transfer.message': '请选择一个Group',
  'pages.application.transfer.desc': `将当前应用迁移到另外一个组，操作者必须是目的组的PE、Owner或者Maintainer`,
  'pages.group.transfer.desc': `将当前组到另外一个组，操作者必须是目的组的PE、Owner或者Maintainer`,
  'pages.group.delete.desc': `需要将当前组下应用和集群清空之后，才能删除当前组, 分组删除后无法恢复`,
  'pages.members.list.title': '以下成员可访问',
  'pages.members.list.leave': '退出',
  'pages.members.list.label': '现有成员',
  'pages.members.remove.confirm.title': '是否确定要移除该成员:{member}?',
  'pages.members.leave.confirm.title': '是否确定要退出?',
  'pages.members.add.success': '添加成员成功',
  'pages.members.update.success': '更新成员成功',
  'pages.members.remove.success': '移除成员成功',
  'pages.members.leave.success': '退出成功',
  'pages.members.list.givenAccess': '由 {grantorName} 添加于 {grantedTime}',
  'pages.members.list.sourceFrom': '来源于{resourceName}，',
  'pages.members.role.tip': `1.按照权限由高到低为：pe、owner、maintainer、guest
  2.所有成员可管理权限低于或等于自己的其他成员`,
  'pages.members.user.anonymous.alert': `你需要先请其中一位成员邀请你加入`,
};
