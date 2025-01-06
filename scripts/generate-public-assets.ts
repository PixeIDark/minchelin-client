import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const outputFile = path.join(process.cwd(), 'src/constants/public.ts');

const validExtensions = new Set(['.svg', '.ico', '.png', '.jpg', '.jpeg', '.gif', '.webp']);

// 파일명을 그대로 키로 사용 (확장자만 제거)
function createObjectKey(filePath: string): string {
  const basename = path.basename(filePath);
  return basename.substring(0, basename.lastIndexOf('.'));
}

function scanDirectory(dir: string, baseDir: string = dir): Record<string, any> {
  const result: Record<string, any> = {};
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const relativePath = '/' + path.relative(baseDir, filePath).replace(/\\/g, '/');

    if (stat.isDirectory()) {
      // 디렉토리명 그대로 사용
      result[file] = scanDirectory(filePath, baseDir);
    } else if (validExtensions.has(path.extname(file).toLowerCase())) {
      // 파일명에서 확장자만 제거하여 사용
      const key = createObjectKey(file);
      result[key] = relativePath;
    }
  }

  return result;
}

function generateTypeScriptCode(assets: Record<string, any>, indent: string = ''): string {
  const entries = Object.entries(assets);
  if (entries.length === 0) return '{}';

  let result = '{\n';

  for (const [key, value] of entries) {
    if (typeof value === 'string') {
      result += `${indent}  ${key}: '${value}',\n`;
    } else {
      result += `${indent}  ${key}: ${generateTypeScriptCode(value, indent + '  ')},\n`;
    }
  }

  result += `${indent}}`;
  return result;
}

try {
  const assets = scanDirectory(publicDir);
  const code = `// 이 파일은 자동으로 생성되었습니다. 직접 수정하지 마세요.
// 마지막 생성: ${new Date().toLocaleString('ko-KR')}

export const PUBLIC = ${generateTypeScriptCode(assets)} as const;
`;

  const constantsDir = path.dirname(outputFile);
  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, code);
  console.log('✅ public 자산 상수가 성공적으로 생성되었습니다:', outputFile);
} catch (error) {
  console.error('❌ 생성 중 오류 발생:', error);
  process.exit(1);
}
