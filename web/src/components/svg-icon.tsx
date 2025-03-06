<<<<<<< HEAD
import { IconMap } from '@/constants/setting';
=======
import { IconMap } from '@/constants/llm';
import { cn } from '@/lib/utils';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import Icon, { UserOutlined } from '@ant-design/icons';
import { IconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Avatar } from 'antd';
import { AvatarSize } from 'antd/es/avatar/AvatarContext';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  const list = requireContext.keys().map((key) => {
    const name = key.replace(/\.\/(.*)\.\w+$/, '$1');
    return { name, value: requireContext(key) };
  });
  return list;
};

let routeList: { name: string; value: string }[] = [];

try {
  routeList = importAll(require.context('@/assets/svg', true, /\.svg$/));
} catch (error) {
  console.warn(error);
  routeList = [];
}

interface IProps extends IconComponentProps {
  name: string;
  width: string | number;
  height?: string | number;
<<<<<<< HEAD
}

const SvgIcon = ({ name, width, height, ...restProps }: IProps) => {
=======
  imgClass?: string;
}

const SvgIcon = ({ name, width, height, imgClass, ...restProps }: IProps) => {
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  const ListItem = routeList.find((item) => item.name === name);
  return (
    <Icon
      component={() => (
<<<<<<< HEAD
        <img src={ListItem?.value} alt="" width={width} height={height} />
=======
        <img
          src={ListItem?.value}
          alt=""
          width={width}
          height={height}
          className={cn(imgClass, 'max-w-full')}
        />
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      )}
      {...(restProps as any)}
    />
  );
};

export const LlmIcon = ({
  name,
  height = 48,
  width = 48,
  size = 'large',
<<<<<<< HEAD
=======
  imgClass,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}: {
  name: string;
  height?: number;
  width?: number;
  size?: AvatarSize;
<<<<<<< HEAD
=======
  imgClass?: string;
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}) => {
  const icon = IconMap[name as keyof typeof IconMap];

  return icon ? (
<<<<<<< HEAD
    <SvgIcon name={`llm/${icon}`} width={width} height={height}></SvgIcon>
=======
    <SvgIcon
      name={`llm/${icon}`}
      width={width}
      height={height}
      imgClass={imgClass}
    ></SvgIcon>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  ) : (
    <Avatar shape="square" size={size} icon={<UserOutlined />} />
  );
};

export default SvgIcon;
