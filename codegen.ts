import type { CodegenConfig } from '@graphql-codegen/cli';
const token = process.env.GIT_EXTENSION_TOKEN;
if (!token) {
	throw new Error(
		'Please set your github token as GIT_EXTENSION_TOKEN env variable'
	);
}

const config: CodegenConfig = {
	overwrite: true,
	schema: 'src/gql/schema/github-graphql-schema.json',
	documents: undefined,
	generates: {
		'src/gql/type.ts': {
			plugins: ['typescript'],
		},
	},
};

export default config;
